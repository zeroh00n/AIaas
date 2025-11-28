class Menu:
    def __init__(self):
        self.item = [];

    def create(self):
        self.item = [];
        while True:
            name = input('메뉴명:');
            if not name:
                break;
            price = input('가격:');

            self.item.append(f'{name},{price}')
        with open('menu1.txt', 'w') as f:
            for i in range(len(self.item)):
                if i != len(self.item)-1:
                    f.write(f'{self.item[i]} \n')
                else:
                    f.write(f'{self.item[i]}')

    def display(self):
        with open('menu1.txt', 'r') as f:
            lines = f.readlines()

        n = 1
        for line in lines:
            line = line.strip()
            if not line:
                continue

            ar = line.split(',', 1)
            if len(ar) != 2:
                continue 

            name = ar[0].strip()
            price = ar[1].strip()

            print(f'{n}. {name}, {price}')
            n += 1


    def update(self):
        while True:
            name = input('메뉴명:')
            if not name:
                break
            price = input('가격:')
            with open('menu1.txt', 'a') as f:
                self.item.append(f'{name},{price}')
                f.write(f'{name},{price}\n')
        
    
    def delete(self):
        self.item = [];
        delN = int(input('삭제할 메뉴번호를 입력하시오:'));

        with open('menu1.txt', 'r') as f:
            lines = f.readlines();

        for line in lines:
            ar = line.strip().split(',');
            name = ar[0];
            price = ar[1];
            self.item.append(f'{name},{price}');
        
        self.item.pop(delN-1);

        with open('menu1.txt', 'w') as f:
            for i in range(len(self.item)-1):
                if i != len(self.item):
                    f.write(f'{self.item[i]} \n')
                else:
                    f.write(f'{self.item[i]}')

    def save(self):
        with open('menu1.txt', 'w') as f:
            for i in range(len(self.item)):
                if i != len(self.item):
                    f.write(f'{self.item[i]} \n')
                else:
                    f.write(f'{self.item[i]}')

