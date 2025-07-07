# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Java 中的序列化和反序列化</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">当在 Java 中创建对象的时候，只要我们需要这个对象，它就会一直存在。但是一旦程序终止，它们也就不复存在了。如果我们想让对象能够在程序不运行的状态下仍然能够保存它们的信息，那就需要用到</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">序列化机制</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">。</font>

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">概述</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">通常情况下，Java 中被创建的对象的声明周期不会比 JVM 的运行周期更长，JVM 运行结束以后，其创建的对象也就消失了。但在某些情况下，我们想要达到一种效果，即即使 JVM 结束运行了，我们还可以用到之前所创建的对象，或者说，我们想要将之前创建的对象保存下来，以便进行传输，更或者说，让之前 JVM 所创建的对象能够在另一个 JVM 中运行。要达到这样的功能，就可以采用 Java 中的序列化和反序列化机制。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Java 序列化适用于以下场景：</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">将对象的字节序列保存（持久化）到硬盘（文件）中；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">在网络上传输对象的字节序列，或进行</font><font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);"> </font>[<font style="color:rgb(0, 71, 171);background-color:rgb(254, 254, 254);">RMI</font>](https://en.wikipedia.org/wiki/Java_remote_method_invocation)<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">（Remote Method Invocation，远程方法调用）时。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">一个对象可以被表示为一个字节序列，该字节序列包括该对象的数据、有关对象的类型信息以及存储在对象中数据的类型。将</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">可序列化的对象</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">写入文件后，还可以从文件中读取出来，根据对象的各种信息在内存中创建该对象，而读取并创建对象的过程称为反序列化。而整个过程都是 JVM 独立的，也就是说在一个平台上序列化的对象可以在另一个完全不同的平台上反序列化对象。</font>

<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">需要注意的是：对象序列化保存的是对象的“状态”，即它的成员变量。因此，对象序列化不会关注类中的静态变量，这个问题在后文中会有提及。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">一般情况下，被序列化的类需要实现 java.io.Serializable 接口，使用 ObjectInputStream 和ObjectOutputStream 进行对象的读写操作。但需要注意的是，该类的所有属性必须是可以序列化的，如果想让某个属性不被序列化，则可以将其声明为</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，即瞬时态的。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">此外，还可以实现 java.io.Externalizable 接口，我们可以在此基础上进行标准的序列化或自定义二进制格式，以满足不同场景下的需求。</font>

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如何序列化对象？</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">只需要让可序列化的对象实现 Serializable 接口，然后再创建一个 ObjectOutputStream 输出流，再调用 ObjectOutputStream 对象的 writeObject() 方法进行输出可序列化对象即可。如下所示：</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">假设要对 Person 类进行序列化操作：</font>

```java
public class Person implements Serializable {
    private String name;
    private int age;

    public Person() {
        System.out.println("无参构造.");
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("有参构造.");
    }

    @Override
    public String toString() {
        return "Person{" +
        "name='" + name + '\'' +
        ", age=" + age +
        '}';
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">然后进行序列化，将对象的信息写入到</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">abc.txt</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">文件中：</font>

```java
public class SerializableTest {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Person person = new Person("zhangsan", 24);
        
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("abc.txt"));
        oos.writeObject(person);
        oos.close();
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果如下：</font>

```java
有参构造.
```

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如何反序列化对象？</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">反序列化对象时，需要创建一个 ObjectInputStream 输入流，然后调用 ObjectInputStream 对象的 readObject() 方法得到序列化的对象即可。</font>

```java
public class SerializableTest {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("abc.txt"));
        Person p = (Person) ois.readObject();
        System.out.println(p);
    }
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果如下：</font>

```java
Person{name='zhangsan', age=24}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">这里体现了构造函数在序列化与反序列化中的作用，或者说，</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">反序列化的对象是由 JVM 自己生成的对象，而不会通过构造方法生成</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">从结果可以看到，反序列化并不会调用构造方法。这也是符合常理的，需要注意一点的是，反序列化 Person 对象时，需要能够找到 Person.class，否则会抛出 ClassNotFoundException 异常。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">这里再指出一点的是，如果一个可序列化的类的成员不是基本类型，而是引用类型，则这个引用类型也必须实现 Serializable 接口。注意下面的代码，我不再让 Person 类实现 Serializable 接口，而是让 Teacher 实现 Serializable 接口，对 Teacher 类进行序列化操作，则会抛出 NotSerializableException 的异常，如下所示：</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Person.java</font>

```java
// 没有实现序列化接口
public class Person{
    private String name;
    private int age;

    public Person() {
        System.out.println("无参构造.");
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("有参构造.");
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Teacher.java</font>

```java
// 实现了序列化接口
public class Teacher implements Serializable {
    private String name;
    private Person person;

    public Teacher(String name, Person person) {
        this.name = name;
        this.person = person;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "name='" + name + '\'' +
                ", person=" + person +
                '}';
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">测试类：</font>

```java
public class SerializableTest {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Person person = new Person("zhangsan", 24);
        Teacher t = new Teacher("lisi", person);
        
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("abc.txt"));
        oos.writeObject(t);
        oos.close();
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果如下：</font>

```java
有参构造.
Exception in thread "main" java.io.NotSerializableException: other.Person
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1184)
	at java.io.ObjectOutputStream.defaultWriteFields(ObjectOutputStream.java:1548)
	at java.io.ObjectOutputStream.writeSerialData(ObjectOutputStream.java:1509)
	at java.io.ObjectOutputStream.writeOrdinaryObject(ObjectOutputStream.java:1432)
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1178)
	at java.io.ObjectOutputStream.writeObject(ObjectOutputStream.java:348)
	at other.SerializableTest.main(SerializableTest.java:10)
```

**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">为什么一个对象实现了 Serializable 接口就可以被序列化呢</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">？</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">通过查看 writeObject() 源码可知，其调用了 writeObject0() 方法，在此方法中，首先会处理之前编写的以及不可替换的对象，如果有的对象被替换了，则再检查被替换的对象，最后如果对象被替换了，则再次进行原始的检查，即检查被写对象的类型是 String 或数组或 Enum 或 Serializable，那么就可以对该对象进行序列化操作，否则将抛出 NotSerializableException 异常。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">部分源码如下：</font>

```java
// 检查一：代码省略
...

// 检查二：代码省略
...

// 检查三：
if (obj instanceof String) {
    writeString((String) obj, unshared);
} else if (cl.isArray()) {
    writeArray(obj, desc, unshared);
} else if (obj instanceof Enum) {
    writeEnum((Enum<?>) obj, desc, unshared);
} else if (obj instanceof Serializable) {
    writeOrdinaryObject(obj, desc, unshared);
} else {
    if (extendedDebugInfo) {
        throw new NotSerializableException(
            cl.getName() + "\n" + debugInfoStack.toString());
    } else {
        throw new NotSerializableException(cl.getName());
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">而针对序列化机制来说，如果对同一对象执行多次序列化操作，并不会得到多个对象。因为保存到磁盘的对象都有一个序列化编号，当程序试图进行序列化时，会检查该对象是否序列化过，只有该对象从未被序列化过，才会将此对象系列化为字节序列，如果此对象已经序列化过，则直接输出其序列化编号。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">也就是说，由于 Java 序列化机制不会重复序列化同一个对象，只会记录已序列化对象的编号。此时如果序列化了一个可变对象（对象内容可以更改）后，若更改了对象内容再次序列化，则并不会再次将此对象转换为字节序列，而是只保存序列化编号。</font>

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">自定义序列化的策略</font>
## <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Externalizable</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如果我们在序列化的过程中有一些别的需求，或者说，我们希望对象的一部分可以被序列化，而另一部分不被序列化，此时可以实现 Externalizable 接口，并且实现它的两个方法：writeExternal() 和 readExternal()，这两个方法会在序列化和反序列化的过程中被自动调用以便执行一些特殊的操作。</font>

<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">需要注意的是：</font>

+ <font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">如果一个类实现了 Serializable 接口，此时对于 Serializable 对象，其对象是与二进制位的构建有关的，而不会调用构造器（正如之前的例子可知）；</font>
+ <font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">而对于一个 Externalizable 对象，其所有的构造函数都会被调用，因此需要给出类的无参和有参构造才可以。</font>

```java
import java.io.*;

public class ExPerson implements Externalizable {
    private String name;
    private int age;

    public ExPerson() {
        System.out.println("无参构造.");
    }

    public ExPerson(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("有参构造.");
    }

    @Override
    public String toString() {
        return name + age;
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        System.out.println("writeExternal() method.");
        out.writeObject(name);
        out.writeInt(age);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        System.out.println("readExternal() method.");
        name = (String) in.readObject();
        age = in.readInt();
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        ExPerson exPerson = new ExPerson("zhangsan", 25);
        System.out.println(exPerson);
        // 序列化
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("123.txt"));
        System.out.println("保存对象：");
        oos.writeObject(exPerson);
        oos.close();

        // 反序列化
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("123.txt"));
        System.out.println("接收对象：");
        exPerson = (ExPerson) ois.readObject();
        System.out.println(exPerson);
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果如下：</font>

```java
有参构造.
zhangsan25
保存对象：
writeExternal() method.
接收对象：
无参构造.
readExternal() method.
zhangsan25
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">从执行结果可以看出，如果不在 readExternal() 方法里初始化 name 和 age 的话，则 name 就会为 null，而 age 就会为 0。为了序列化与反序列化的正确性，我们需要在 writeExternal() 方法中将信息进行写入，还需要在 readExternal() 方法中恢复数据。</font>

## <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">transient</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">当然，我们也可以使用</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">关键字，将一些重要的信息（如密码）不被进行序列化，如果某个属性被</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">关键字修饰的话，则该属性不会参与到序列化的过程，此时将其进行反序列化后，如果该属性是引用数据类型，则返回的是 null，如果该属性是基本数据类型（如 int 类型），则会返回默认值 0（当然，boolean 的默认值是 false）。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Person.java</font>

```java
import java.io.*;

public class Person implements Serializable {
    private transient String name;
    private transient int age;
    private int height;

    public Person() {
        System.out.println("无参构造.");
    }

    public Person(String name, int age, int height) {
        this.name = name;
        this.age = age;
        this.height = height;
        System.out.println("有参构造.");
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", height=" + height +
                '}';
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果为：</font>

```java
有参构造.
Person{name='null', age=0, height=180}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">可以看到，由于 name 和 age 都被</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">修饰，所以在进行反序列化输出的时候，均输出了默认值 null 或 0。</font>

<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">由于实现 Externalizable 接口的对象在默认情况下不保存它们的任何字段，所以</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">关键字只能和 Serializable 对象一起使用。</font>

`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">关键字小结：</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">在变量声明前加上</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">关键字，</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">可以阻止该变量被序列化到文件中</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，在被反序列化后，</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">transient</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">变量的值被设置为初始值，如 int 型的是 0，引用类型或对象类型是 null；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">服务器端给客户端发送序列化对象数据时，对象中有一些数据是敏感的（比如密码字符串等），如果希望对该密码字段在序列化时进行加密，而客户端如果拥有解密的密钥，只有在客户端进行反序列化时，才可以对密码进行读取，这样可以一定程度保证序列化对象的数据安全。</font>

## <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">重写两个方法</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">此外，在实现 Serializable 接口的同时，还可以重写 writeObject() 和 readObject() 方法，这样一旦对象被序列化或被反序列化，就会自动的调用这两个方法，而不会使用默认的序列化机制。具体的实现方式与 Externalizable 接口中的 writeExternal() 方法和 readExternal() 方法大体相同。</font>

## <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">静态变量</font>
**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">对象序列化时并不会序列化静态变量</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，这是因为对象序列化操作是序列化的是对象的状态，而静态变量属于类变量，也就是类的状态。因此，对象序列化并不会保存静态的变量。</font>

```java
public class StaticSerializableTest implements Serializable {
    private static int age = 25;

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // 序列化
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("staticSerializable.txt"));
        oos.writeObject(new StaticSerializableTest());
        oos.close();

        // 修改静态变量的值
        StaticSerializableTest.age = 30;

        // 反序列化
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("staticSerializable.txt"));
        StaticSerializableTest ss = null;
        ss = (StaticSerializableTest) ois.readObject();

        System.out.println(ss.age);
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果如下：</font>

```java
30
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">从结果可以看出，</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">序列化保存的是对象的状态，而静态变量属于类的状态</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">。</font>

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">序列化 ID</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">虚拟机是否允许反序列化，不仅取决于类路径和</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">功能代码是否一致</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，还取决于两个类的序列化 ID 是否一致。如果两个类的功能代码都是一样的，但只有</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">是不一致的，则它们之间是无法进行序列化和反序列化的。</font>

<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">对</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">功能代码是否一致</font>`<font style="color:rgba(52, 73, 94, 0.8);background-color:rgba(0, 71, 171, 0.05);">的解释：这里指的是被序列化的类所要实现的功能是一样的，即客户端 A 将对象序列化给客户端 B，然后客户端 B 会进行反序列化，此时 A 和 B 都有这么一个类文件，只的是它们的功能代码是一样的，也都实现了 Serializable 接口。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">有两种方式生成</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">：</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">一种是默认值 1L；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">另一种是通过类名、接口名、方法名以及属性随机生成的一个不重复的 long 类型的数据。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">也就是说，在版本号（serialVersionUID）相同的情况下，即使更改了序列化属性，那么对象也是可以被正确的反序列化回来的。如果只是修改了方法或者只是修改了静态变量或瞬态变量，则反序列化不会受影响，无需修改版本号。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">一般需要显式的声明</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">的场景如下：</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">在某些场景中，希望类的不同版本对序列化兼容，因此需要确保类的不同版本具有相同的</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">而在某些场景中，不希望类的不同版本对序列化兼容，则需要确保类的不同版本具有不同的</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">当序列化了一个类实例以后，如果想要更改一个字段或增加一个字段，此时如果不设置</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">的话，所做的任何更改都将导致无法序列化旧的实例，并在反序列化抛出一个异常。</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如果添加了</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">serialVersionUID</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，在反序列化旧的实例时，新添加或更改的字段值将被设置为初始化值。</font>

# <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">对单例的影响</font>
<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">除了反射可以破坏单例模式以外，序列化和反序列化也可以破坏单例模式。下面以</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">双重校验锁</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">的方式实现单例模式，并实现了</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">Serializable</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">接口：</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">Singleton.java</font>

```java
public class Singleton implements Serializable {
    private volatile static Singleton instance;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">然后是测试类 SerializableDemo.java：</font>

```java
public class SerializableDemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // 序列化
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("456.txt"));
        oos.writeObject(Singleton.getInstance());
        oos.close();

        // 反序列化
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("456.txt"));
        Singleton newSingleton = (Singleton)ois.readObject();

        // 比较是否相等
        System.out.println(Singleton.getInstance() == newSingleton);
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">输出结果是</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">false</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，也就是说通过对 Singleton 的序列化和反序列化操作，得到的对象是一个新的对象，这样显然破坏了所谓的单例模式。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">我们可以注意到，在进行反序列化时，使用了 ObjectInputStream 对象的 readObject() 方法，而 readObject() 底层调用了 readObject0() 方法，在 readObject0() 方法中会返回一个 checkResolve(readOrdinaryObject(unshared))。我们来看一下里面的 readOrdinaryObject(unshared) 方法是做什么的。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">readOrdinaryObject() 方法用于返回并读取“普通”对象，这里的“普通对象”不包括 String、Class、ObjectStreamClass、数组或枚举常量这些对象，该方法内部有如下几行代码：</font>

```java
Object obj;
try {
    obj = desc.isInstantiable() ? desc.newInstance() : null;
} catch (Exception ex) {
    throw (IOException) new InvalidClassException(desc.forClass().getName(), 
                                                "unable to create instance").initCause(ex);
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">其中</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">isInstantiable()</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">表示如果一个 Serializable 或 Externalizable 的类可以在运行时被实例化的话，那么该方法就返回 true。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">其中</font>`<font style="color:rgb(199, 37, 78);background-color:rgb(240, 242, 245);">desc.newInstance()</font>`<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">方法通过反射的方式调用无参构造方法新建一个对象，即创建一个类的新的实例。</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如果该类是 Externalizable，则调用其公共的无参构造方法，创建新实例；</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如果该类是 Serializable，则调用第一个不可进行序列化的超类的无参构造函数，创建新实例。</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">因此，</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">序列化会通过反射调用无参的构造方法创建一个新的对象</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，所以说序列化会破坏单例模式。</font>

**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">如何防止序列化破坏单例模式</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">？</font>

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">我们注意到 readOrdinaryObject() 方法中还有如下语句：</font>

```java
if (obj != null &&
    handles.lookupException(passHandle) == null &&
    desc.hasReadResolveMethod())
{
    Object rep = desc.invokeReadResolve(obj);
    if (unshared && rep.getClass().isArray()) {
        rep = cloneArray(rep);
    }
    if (rep != obj) {
        // Filter the replacement object
        if (rep != null) {
            if (rep.getClass().isArray()) {
                filterCheck(rep.getClass(), Array.getLength(rep));
            } else {
                filterCheck(rep.getClass(), -1);
            }
        }
        handles.setObject(passHandle, obj = rep);
    }
}
```

<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">需要注意的有两点：</font>

+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">这里的 hasReadResolveMethod() 表示如果继承 Serializable 或者 Externalizable 接口的类中包含了 readResolve()，则返回 true。</font>
+ <font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">而 invokeReadResolve() 方法会通过反射的方式调用要被反序列化的类的 readResolve() 方法。</font>

**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">因此，只需要在 Singleton.java 中添加 readResolve() 方法并指定要返回的对象的生成策略，就能防止序列化破坏单例的情况</font>**<font style="color:rgb(52, 73, 94);background-color:rgb(254, 254, 254);">，如下所示：</font>

```java
public class Singleton implements Serializable {
    private volatile static Singleton instance;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    // 添加 readResolve 方法
    public Object readResolve() {
        return instance;
    }
}
```

