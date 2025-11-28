class Menu:
    def __init__(self):
        self.item = [];
        with open('menu1.txt', 'r') as f:
            lines = f.readlines();
            for line in lines:
                line = line.strip()
                if not line:
                    continue

                ar = line.split(',', 1)
                if len(ar) != 2:
                    continue 

                name = ar[0].strip()
                price = ar[1].strip()
                self.item.append((name, price))

    def create(self):
        self.item = [];
        while True:
            name = input('메뉴명:');
            if not name:
                break;
            price = input('가격:');

            self.item.append((name, price))
        with open('menu1.txt', 'w') as f:
            for name,price in self.item:
                f.write(f'{name},{price}\n')

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
            self.item.append((name,price))
            with open('menu1.txt', 'a') as f:
                f.write(f'{name},{price}\n')
        
    
    def delete(self):
        try:
            delN = int(input('삭제할 메뉴번호를 입력하시오:'));
        except ValueError:
            print("숫자를 입력해주세요")
            return
        

        """with open('menu1.txt', 'r') as f:
            lines = f.readlines();

        for line in lines:
            ar = line.strip().split(',');
            name = ar[0];
            price = ar[1];
            self.item.append(f'{name},{price}');"""
        
        try:
            self.item.pop(delN-1);
            print('삭제되었습니다')
        except IndexError:
            print('해당 번호가 없습니다')
            return;

        with open('menu1.txt', 'w') as f:
            for name,price in self.item:
                f.write(f'{name},{price}\n')

    def save(self):
         with open('menu1.txt', 'w') as f:
            for name,price in self.item:
                f.write(f'{name},{price}\n')


