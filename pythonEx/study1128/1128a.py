chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=?0123456789"
chars_list = list(chars)

def brute_fast(target):
    target_tuple = tuple(target)

    for num in range(52**3):  # 35진수 3자리
        c1 = chars_list[num // (52*52)]
        c2 = chars_list[(num // 52) % 52]
        c3 = chars_list[num % 52]

        if (c1, c2, c3) == target_tuple:
            return c1 + c2 + c3

# 여기서 입력 받기
user_input = input("찾고 싶은 3자리 문자열 입력: ")

result = brute_fast(user_input)
print("결과:", result)
print(len(chars))
