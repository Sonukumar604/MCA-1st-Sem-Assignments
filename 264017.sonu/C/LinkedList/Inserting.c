//Inserting LinkedList using c program
//1.) Insert at beginning
#include<stdio.h>
int main(){
    struct node{
        int info;
        struct node *link;
    }*top = NULL;
    int item, ch;
    while(1){
        printf("\n1. Insert at beginning\n");
        printf("2. Insert at end\n");
        printf("3. Insert at specific position\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", & ch);
        switch(ch){
            case 1:
                printf("Enter the item to be inserted at beginning: ");
                scanf("%d", & item);
                struct node *newnode;
                newnode = (struct node*)malloc(sizeof(struct node));
                newnode->info = item;
                newnode->link = top;
                top = newnode;
                break;
            case 2:
                // Code for inserting at end
                printf("Enter the item to be inserted at end: ");
                scanf("%d", &item);
                struct node *newnode_end;
                newnode_end = (struct node*)malloc(sizeof(struct node));
                newnode_end->info = item;
                newnode_end->link = NULL;
                if(top == NULL){
                    top = newnode_end;
                } else {
                    struct node *ptr = top;
                    while(ptr->link != NULL){
                        ptr = ptr->link;
                    }
                    ptr->link = newnode_end;
                }
                break;
            case 3:
                // Code for inserting at specific position
                printf("Enter the position where you want to insert: ");
                int pos;
                scanf("%d", &pos);
                printf("Enter the item to be inserted: ");
                int item;
                scanf("%d", &item);
                struct node *newnode_pos;
                newnode_pos = (struct node*)malloc(sizeof(struct node));
                newnode_pos->info = item;
                newnode_pos->link = NULL;
                if(pos == 0){
                    newnode_pos->link = top;
                    top = newnode_pos;
                } else {
                    struct node *ptr = top;
                    for(int i = 0; i < pos - 1 && ptr != NULL; i++){
                        ptr = ptr->link;
                    }
                    if(ptr != NULL){
                        newnode_pos->link = ptr->link;
                        ptr->link = newnode_pos;
                    } else {
                        printf("Position out of bounds\n");
                    }
                }
                break;
            case 4:
                exit(0);,
                break;
            default:
                printf("Invalid choice\n");
                break;
        }
    }
    return 0;
}

