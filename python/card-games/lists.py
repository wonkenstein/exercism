"""Functions for tracking poker hands and assorted card tasks.

Python list documentation: https://docs.python.org/3/tutorial/datastructures.html
"""


def get_rounds(number):
    """Create a list containing the current and next two round numbers.

    :param number: int - current round number.
    :return: list - current round and the two that follow.
    """

    return [number, number+1, number+2]


def concatenate_rounds(rounds_1, rounds_2):
    """Concatenate two lists of round numbers.

    :param rounds_1: list - first rounds played.
    :param rounds_2: list - second set of rounds played.
    :return: list - all rounds played.
    """

    return rounds_1 + rounds_2


def list_contains_round(rounds, number):
    """Check if the list of rounds contains the specified number.

    :param rounds: list - rounds played.
    :param number: int - round number.
    :return: bool - was the round played?
    """

    return number in rounds


def card_average(hand):
    """Calculate and returns the average card value from the list.

    :param hand: list - cards in hand.
    :return: float - average value of the cards in the hand.
    """
    total = 0
    for cards in hand:
        total += cards

    return total / len(hand)


def approx_average_is_average(hand):
    """Return if an average is using (first + last index values )
    OR ('middle' card) == calculated average.

    :param hand: list - cards in hand.
    :return: bool - does one of the approximate averages equal the `true average`?
    """

    approx_average = (hand[0] + hand[-1]) / 2
    average = card_average(hand)
    middle_index = divmod(len(hand),  2)

    # return (hand[middle_index[0]] == average or approx_average == average)
    return average in (hand[middle_index[0]], approx_average)


def average_even_is_average_odd(hand):
    """Return if the (average of even indexed card values) ==
        (average of odd indexed card values).

    :param hand: list - cards in hand.
    :return: bool - are even and odd averages equal?
    """

    # odd_total = 0
    # odd_count = 0
    # even_total = 0
    # even_count = 0
    # for index, val in enumerate(hand):
    #     if index % 2 == 0:
    #         even_count += 1
    #         even_total += val
    #     else:
    #         odd_count += 1
    #         odd_total += val
    # return odd_total / odd_count == even_total / even_count
    return card_average(hand[0::2]) == card_average(hand[1::2])


def maybe_double_last(hand):
    """Multiply a Jack card value in the last index position by 2.

    :param hand: list - cards in hand.
    :return: list - hand with Jacks (if present) value doubled.
    """

    if hand[-1] == 11:
        hand[-1] = hand[-1] * 2

    return hand
