public class increment{
    public static void main(String[] args) {
        int a = 5;

        // pre increment
        int pre = ++a;
        System.out.println(a+" "+pre);

        a = 5;

        // post increment
        int post = a++;
        System.out.println(a+" "+post);
    }
}