# Challenge Summary
create linked list and use append to insert value and use insert after and insert before

## Whiteboard Process
![whiteboard](../image/ll.png)
## Approach & Efficiency

Space: O(n) Time: O(n) Append to End: Find tail set tail.next to new Node replace tail node with new node Insert before: Search linked list for search value and keep track of last node If found last node.next = new node & new node.next = current node Insert after: Search linked list for search value keeping next node in a variable If found current node.next = new node & new node.next = next node
## Solution
Append: takes one argumant and adds to the end of the list a new node with the value given.
insert
Prior to: accepts two values; the value that you want to add and the value that you wish to install before; then immediately prior to the first node that has the value supplied, you add the new node with that value.
insert
Then: accepts two parameters: value, new value, then immediately after the first node with the provided value adds the new node to the given value.
