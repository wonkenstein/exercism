"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

# TODO: define the 'EXPECTED_BAKE_TIME' constant
EXPECTED_BAKE_TIME = 40

# TODO: consider defining the 'PREPARATION_TIME' constant
#       equal to the time it takes to prepare a single layer
PREPARATION_TIME = 2

# TODO: define the 'bake_time_remaining()' function
def bake_time_remaining(time_elapsed=0):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - time_elapsed
    # pass


# TODO: define the 'preparation_time_in_minutes()' function
#       and consider using 'PREPARATION_TIME' here
def preparation_time_in_minutes(num_layers=1):
    """Calculate the preparation time.

    :param num_layers: int - number of layers to prepare.
    :return: int - time taken to prepare the layers (in minutes) derived from 'PREPARATION_TIME'.
    """
    return PREPARATION_TIME * num_layers
    # pass

# TODO: define the 'elapsed_time_in_minutes()' function
def elapsed_time_in_minutes(layers=0, bake_time=0):
    """Calculate the total elapsed time.

    :param num_layers: int - number of layers to prepare.
    :param bake_time: int - bake_time elapsed.
    :return: int - calculate elapsed time taken to prepare and bake cake.
    """
    return preparation_time_in_minutes(layers) + bake_time
    # pass