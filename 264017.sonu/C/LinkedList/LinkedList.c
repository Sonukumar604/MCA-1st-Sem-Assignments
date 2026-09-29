#include<stdio.h>
#include<stdlib.h>
 
struct node{
    int info;
    struct node *link;
}*top = NULL;

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
            case 1:
                printf("Enter the item to be pushed: ");
                scanf("%d", & item);
                struct node *newnode;
                newnode = (struct node*)malloc(sizeof(struct node));
                newnode->info = item;
                newnode->link = top;
                top = newnode;
                break;
            case 2:
                if(top == NULL){
                    printf("Stack is empty\n");
                }else{
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
                    printf("Stack is empty\n");
                    break;
                }else{
                    struct node * temp;
                    temp = top;
                    printf("Stack elements: ");
                    while(temp != NULL){
                        printf("%d ", temp->info);
                        temp = temp->link;
                    }
                    printf("\n");
                }
                break;       
        }
    }
}