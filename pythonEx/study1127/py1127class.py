class Calculator:
    
    def __init__(self, a, b):
        self.num1 = a;
        self.num2 = b;
    def add(self):
        return self.num1 + self.num2
    def min(self):
        return self.num1 - self.num2
    def mul(self):
        return self.num1 * self.num2
    def div(self):
        return self.num1 // self.num2
    def selfx(self, x):
        self.num1 = x;
    def selfy(self, y):
        self.num2 = y;