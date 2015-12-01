defmodule Playground.PageController do
  use Playground.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
