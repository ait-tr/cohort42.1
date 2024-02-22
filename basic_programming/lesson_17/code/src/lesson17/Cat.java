package lesson17;

public class Cat {
    private String name;
    String color;
    int age;

    public Cat(String name, String color, int age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    public void setName(String name) {
        if (name != null) {
            this.name = name;
        }
    }

    public String getName() {
        return name;
    }

    public void voice() {
        System.out.println("Meow!");
    }
}
