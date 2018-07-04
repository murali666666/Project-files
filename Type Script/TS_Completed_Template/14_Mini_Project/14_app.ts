class calculatorApp{
    private static firstNumber:HTMLInputElement;
    private static SecondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equals_button:HTMLButtonElement;
    private static plus_button:HTMLButtonElement;
    private static minus_button:HTMLButtonElement;
    private static division_button:HTMLButtonElement;
    private static mul_button:HTMLButtonElement;
    private static clear_button:HTMLButtonElement;
}

constructor(){

}
public static initialize(){
    calculatorApp.firstNumber=
        document.querySelector('#firstName')as HTMLInputElement;
    calculatorApp.SecondNumber=
        document.querySelector('#SecondNumber')as HTMLInputElement;
    calculatorApp.operator=
        document.querySelector('#operator')as HTMLInputElement;
    calculatorApp.equals_button=
        document.querySelector('#equals-button')as HTMLInputElement;
    calculatorApp.equals_button=
        document.querySelector('#equals-button')as HTMLInputElement;

}