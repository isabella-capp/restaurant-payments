# **Renstaurant Payment**

This is my first project to begin deepening knowledge in web development using HTML, CSS, and JavaScript. Is an interactive web application for managing a product menu, selecting items, and calculating the total cost. The user interface is simple, with a structure that allows users to easily navigate between product categories and interact with selected items.

## **Features**
1. **Product Selection**  
   - Users can choose products from various categories: Pizzas, Pastas, Main Courses, Desserts, Appetizers, Drinks, Alcoholic Beverages, Wines, etc.
   - Each product is displayed with an image, name, and price.

2. **Dynamic Total Calculation**  
   - The total cost is updated in real-time as products are added or removed from the cart.

3. **Calculation Features**  
   - **Per Person Division:** Calculates the total cost per person based on the number of participants.
   - **Discount Application:** Allows users to apply a percentage discount on the total amount.
   - **Change Calculation:** Determines the change to be given based on the cash entered.

4. **Input Management**  
   - Numeric buttons for entering quantities or monetary values.
   - A button for clearing an input field or deleting the last character.

5. **Receipt Generation**  
   - A popup displays a summary of the order, including selected products and total cost.

6. **Menu Category Management**  
   - Each category has its own function to dynamically generate the product grid.

## **How to Use**
1. **Clone the Repository**  
   ```bash
   git clone <repository-URL>
   ```
2. **Open the Project in Your Browser**  
   Open the `index.html` file to run the project.

3. **Interact with the Interface**  
   - Use the category buttons to navigate between products.
   - Click on products to add them to the cart.
   - Use the calculation features to customize the total.

## **Technologies Used**
- **HTML:** Page structure.
- **CSS:** Styling and layout.
- **JavaScript:** Dynamic logic, event handling, and calculations.

## **Future Improvements**
1. **Refactor Code for Readability and Maintainability**: Refactor the code to make it more modular, readable, and maintainable by organizing functions, reducing repetition, and following coding best practices.
2. **Fix Receipt Generation and Change Calculation** Currently, the receipt could be generated after calculating the change, which leads to incorrect receipt information. Future updates will ensure that, even if the change is calculated first, the total displayed on the receipt will be correct.

## **Contributions**
Contributions and bug reports are welcome! Feel free to create an issue or a pull request to improve the project.
