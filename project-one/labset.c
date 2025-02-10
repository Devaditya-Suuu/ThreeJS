#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, j;
    printf("Enter the number of students: ");
    scanf("%d", &n);

    char names[n][100];   // Array to store student names
    char USN[n][100];   // Array to store student names
    int arr[n];        // Array to store USN and Marks for each student

    printf("Enter the details of %d students:\n", n);

    for (i = 0; i < n; i++) {
        printf("Student %d:\n", i + 1);

        printf("Name: ");
        scanf(" %s", names[i]); // Read string input (handles spaces)

        printf("USN: ");
        scanf("%s", &USN[i]); // Store USN in arr[i][0]

        printf("Marks: ");
        scanf("%d", &arr[i]); // Store Marks in arr[i][1]
    }

    // Print student details
    printf("\nDetails of %d students:\n", n);
    for (i = 0; i < n; i++) {
        printf("Student %d:\n", i + 1);
        printf("Name: %s\n", names[i]);
        printf("USN: %s\n", arr[i]);
        printf("Marks: %d\n", arr[i]);
        printf("\n");
    }

    return 0;
}
