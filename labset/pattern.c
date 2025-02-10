#include <stdio.h>
#include <stdlib.h>

// Function to calculate the length of a string
int stringLength(char str[]) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}

// Function to compare two strings
int stringCompare(char str1[], char str2[]) {
    int i = 0;

    // Compare characters one by one
    while (str1[i] != '\0' && str2[i] != '\0') {
        if (str1[i] != str2[i]) {
            return str1[i] - str2[i]; // Return difference between mismatched characters
        }
        i++;
    }

    // Check if one string is longer than the other
    return str1[i] - str2[i];
}

// Function to concatenate two strings
void stringConcatenate(char str1[], char str2[], char result[]) {
    int i = 0, j = 0;

    // Copy str1 to result
    while (str1[i] != '\0') {
        result[i] = str1[i];
        i++;
    }

    // Append str2 to result
    while (str2[j] != '\0') {
        result[i] = str2[j];
        i++;
        j++;
    }

    // Null-terminate the result
    result[i] = '\0';
}

int main() {
    char str1[100], str2[100], result[200];
    int choice;

    while(1){
        printf("Choose an operation:\n");
    printf("1. Find string length\n");
    printf("2. Compare two strings\n");
    printf("3. Concatenate two strings\n");
    printf("4. to exit the program\n");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("Enter the string to find its length: ");
            scanf("%s", str1); // Input the string
            printf("Length of the string: %d\n", stringLength(str1));
            break;

        case 2:
            printf("Enter the first string: ");
            scanf("%s", str1);
            printf("Enter the second string: ");
            scanf("%s", str2);
            int cmpResult = stringCompare(str1, str2);
            if (cmpResult == 0) {
                printf("The strings are equal.\n");
            } else if (cmpResult > 0) {
                printf("The first string is greater.\n");
            } else {
                printf("The second string is greater.\n");
            }
            break;

        case 3:
            printf("Enter the first string: ");
            scanf("%s", str1);
            printf("Enter the second string: ");
            scanf("%s", str2);
            stringConcatenate(str1, str2, result);
            printf("Concatenated string: %s\n", result);
            break;
        case 4:
            exit(0);

        default:
            printf("Invalid choice!\n");
            break;
        }
    }

    return 0;
}