import re
from datetime import datetime

class Order:
    def __init__(self):
        self.orderList = [];
        self.menuList = [];

        with open('menu1.txt', 'r') as f:
            lines = f.readlines();

        for line in lines:
            line = line.strip()
            if not line:
                continue

            ar = line.split(',',1)
            if len(ar) != 2:
                continue

            name = ar[0].strip()
            price = ar[1].strip()

            self.menuList.append((name,price))    

    
    def add(self):
        while True:
            n =1
            for name, price in self.menuList:
                print(f'{n}. {name}, {price}')
                n += 1
            print('주문을 입력하시오');
            or1 = input('메뉴번호:');
            if not or1:
                break;
            quantity = int(input('수량:'));

            m = 1
            for name, price in self.menuList:
                if int(or1) == m :
                    result = quantity*int(price);
                    self.orderList.append((name, quantity, result))
                    print(f'메뉴명:{name} 수량:{quantity} 금액:{result}')
                m += 1;          


    def display(self):
        n =1;
        sum = 0;
        for name, price, result in self.orderList:
            sum += result
            print(f'{n}. 메뉴명:{name} 수량:{price} 금액:{result}')
            n += 1;
        print(f'총 금액:{sum}')

    def delete(self):
        n = 1;
        for name, price, result in self.orderList:
            print(f'{n}. 메뉴명:{name} 수량:{price} 금액:{result}')
            n += 1;
        delN = int(input('취소할 주문 번호를 입력하세요: '));

        self.orderList.pop(delN-1);

    def mile(self):
        now = datetime.now();
        nowStr = now.strftime('%Y-%m-%d %H:%M:%S');

        answer = input('마일리지를 적립하겠습니까 o/x:');

        if answer == 'o':
            checkTel = re.compile(r'[0-9]{3}-[0-9]{4}-[0-9]{4}$')
            while True:
                tel = input('마일리지 적립 번호를 입력해주세요:')
                telisTrue = checkTel.fullmatch(tel);
                now = datetime.now();
                nowStr = now.strftime('%Y-%m-%d %H:%M:%S')
                if telisTrue:
                    with open('sales.txt', 'w') as f:
                        for name, price, result in self.orderList:
                            f.write(f'{name},{price},{result},{tel},{nowStr}\n')
                    break
                else:
                    print('잘못된 입력입니다.')
        elif answer == 'x':
            with open('sales.txt', 'w') as f:
                    for name, price, result in self.orderList:
                        f.write(f'{name},{price},{result},x,{nowStr}\n')

    def save(self):
        with open('order.txt', 'w') as f:
            for name, price, result in self.orderList:
                f.write(f'{name},{price},{result}\n');


