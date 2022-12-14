def leap_year(year):
    divisible_by_4 = (year % 4 == 0)
    if (divisible_by_4):
        divisible_by_100 = (year % 100 == 0)
        divisible_by_400 = (year % 400 == 0)
        # except every year that is evenly divisible by 100
        if (divisible_by_100 and not divisible_by_400):
            return False
        return True
    return False
