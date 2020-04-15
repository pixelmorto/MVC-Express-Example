# MVC-Express

This is a simple API using MVC and JWT

# Routes
* ``/users/register => POST(username, password)`` this register an user
* ``/users => GET(Requires Authorization from /auth)`` this show all registred users
* ``/auth => POST(usename, password)`` this return a token(jwt)
