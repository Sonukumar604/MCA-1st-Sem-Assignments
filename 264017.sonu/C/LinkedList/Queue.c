#include<stdio.h>
#include<stdlib.h>
 
struct node{
    int info;
    struct node *link;
}*top = NULL, *rear = NULL;

int main(){
    int item, ch;
    while(1){
        printf("\n1. Push\n");
        printf("2. Pop\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", & ch);
        switch(ch){
           // case 1: Push at Specific position
           case1:
                if(top)
                
            case 2:
                if(top == NULL){
                    printf("Queue is empty\n");
                }else{
                    if(top == rear){
                        free(top);
                        top = NULL;
                        rear = NULL;
                    }
                    struct node * temp;
                    temp = top;
                    printf("Popped item: %d\n", temp->info);
                    top = top->link;
                    free(temp);
                    printf("Item popped successfully\n");
                }
                break;
             case 3:
                if(top == NULL){
                    printf("Queue is empty\n");
                    break;
                }else{
                    struct node *temp;
                    temp = top;
                    printf("Queue elements: ");
                    while(temp != NULL){
                        printf("%d ", temp->info);
                        temp = temp->link;
                    }
                    printf("\n");
                }
                break;      
            case 4:
                exit(0);
                break;
            default:
                printf("Invalid choice\n");
                break;
        }
    }
}