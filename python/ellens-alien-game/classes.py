"""Solution to Ellen's Alien Game exercise."""


class Alien:
    """Create an Alien object with location x_coordinate and y_coordinate.

    Attributes
    ----------
    (class)total_aliens_created: int
    x_coordinate: int - Position on the x-axis.
    y_coordinate: int - Position on the y-axis.
    health: int - Amount of health points.

    Methods
    -------
    hit(): Decrement Alien health by one point.
    is_alive(): Return a boolean for if Alien is alive (if health is > 0).
    teleport(new_x_coordinate, new_y_coordinate): Move Alien object to new coordinates.
    collision_detection(other): Implementation TBD.
    """
    HEALTH_START_LEVEL = 3
    total_aliens_created = 0

    def __init__(self, x_coord, y_coord) -> None:
        """Constructor
        """
        self.x_coordinate = x_coord
        self.y_coordinate = y_coord
        self.health = self.HEALTH_START_LEVEL

        Alien.total_aliens_created += 1

    def hit(self):
        """hit - decrement health
        """
        if self.health > 0:
            self.health -= 1

    def is_alive(self):
        """Returns boolean and checks if alien is alive
        """
        return self.health > 0

    def teleport(self, x_coord, y_coord):
        """Teleport alin to new coordinates
        """
        self.x_coordinate = x_coord
        self.y_coordinate = y_coord

    def collision_detection(self, alien):
        """Placeholder
        """
        # pass


def new_aliens_collection(coordinate_list):
    """Return a list of aliens
    """
    aliens = []
    for coordinates in coordinate_list:
        aliens.append(Alien(coordinates[0], coordinates[1]))

    return aliens
