class Sales:
    def __init__(self):
        self.historyList =[];

        with open('sales.txt', 'r') as f:
            lines = f.readlines();

        for line in lines:
            line = line.strip()
            if not line:
                continue

            ar = line.split(',', 4)
            if len(ar) != 5:
                continue 

            name = ar[0].strip()
            price = ar[1].strip()
            result = int(ar[2].strip())
            tel = ar[3].strip()
            nowStr = ar[4].strip()
            self.historyList.append((name, price, result, tel, nowStr))

    def display(self):
        sum = 0;
        n = 1
        for name, price, result, tel, nowStr in self.historyList:
            sum += result;
            print(f'{n}. {name} {price} {result} {tel} {nowStr}\n');
            n+=1;
        print(f'총 매출액:{sum}')