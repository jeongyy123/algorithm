x, y, w, h = map(int, input().split())

x_diff = (w - x) if (w - x) < x else x
y_diff = (h - y) if (h - y) < y else y

if x_diff < y_diff:
    print(x_diff)
else:
    print(y_diff)
