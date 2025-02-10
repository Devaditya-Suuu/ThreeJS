#include <stdio.h>
    int main() {
    int a = 5;

    // pre increment
    int pre = ++a;
    printf("pre increment %d %d", a, pre);

// re initiallize
    a = 5;

// post increment
    int post = a++;
    printf(" post increment %d %d", a, post);

    return 0;
}
