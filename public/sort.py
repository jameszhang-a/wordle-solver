with open("sgb-words.txt") as data:
    words = [word.strip() for word in data]
    words = sorted(words)
    print(words)

    with open("5-words.txt", "w+") as f:
        for word in words:
            f.write(word)
            f.write("\n")
