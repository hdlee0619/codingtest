from sys import stdin

N = input()
array = list(map(int, stdin.readline().rsplit()))

print(min(array), max(array))