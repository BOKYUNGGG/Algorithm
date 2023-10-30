def plus(book) :
    hour, minute = map(int, book.split(':'))
    
    if 50 < minute <= 59 :
        minute = minute + 10 - 60
        hour = hour+1
    else :
        minute = minute + 10
        
    if hour < 10 :
        hour = "0" + str(hour)
    if minute < 10 :
        minute = "0" + str(minute)
    
    return str(hour) + ":" + str(minute)

def solution(book_time):
    rooms = []
    book_time.sort()
    rooms.append(book_time[0])
    book_time = book_time[1:]
    
    for book in book_time :
        isAppendible = True
        
        for room in rooms :
            if room[-1] <= book[0] :
                isAppendible = False
                room.append(plus(book[1]))
                break
        
        if isAppendible :
            rooms.append([plus(book[1])])
    
    return len(rooms)
books = [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]
res = solution(books)
print(res)