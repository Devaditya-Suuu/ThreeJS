#include<stdio.h>

int main() {
  struct student {
    char name[20];
    char usn[20];
    int marks;
  };
  int n;
  printf("\nEnter the number of students: ");
  scanf("%d", & n);
  struct student s[n];
  int i, total = 0;
  float avgmarks;
  printf("\nEnter the details of %d students.....\n", n);
  for (i = 0; i < n; i++) {
    printf("\nStudent%d Details:\n", i + 1);
    printf("Name: ");
    scanf("%s", s[i].name);
    printf("USN: ");
    scanf("%s", s[i].usn);
    printf("Marks scored: ");
    scanf("%d", & s[i].marks);
    total = total + s[i].marks;
  }
  printf("\n\n Details of %d students......\n\n", n);
  printf("------------------------------------------------------\n");
  printf("NAME\tUSN\tMARKS\n");
  printf("------------------------------------------------------\n");
  for (i = 0; i < n; i++)
    printf("%s\t%s\t%d\n", s[i].name, s[i].usn, s[i].marks);
  avgmarks = (float) total / n;
  printf("\nAverage Marks = %.2f\n", avgmarks);
  printf("\n\nDetails of the students who have scored above %.2f:\n\n", avgmarks);
  printf("------------------------------------------------------\n");
  printf("NAME\t\tUSN\t\tMARKS\n");
  printf("------------------------------------------------------\n");
  for (i = 0; i < n; i++) {
    if (s[i].marks > avgmarks)
      printf("%-12s\t%-12s\t%-6d\n", s[i].name, s[i].usn, s[i].marks);
  }
  printf("\n\nDetails of the students who have scored below %.2f:\n\n", avgmarks);
  printf("------------------------------------------------------\n");
  printf("NAME\t\tUSN\t\tMARKS\n");
  printf("------------------------------------------------------\n");
  for (i = 0; i < n; i++) {
    if (s[i].marks < avgmarks)
      printf("%-12s\t%-12s\t%-6d\n", s[i].name, s[i].usn, s[i].marks);
  }
  return 0;
}