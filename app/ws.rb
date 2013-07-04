require 'websocket-eventmachine-server'
EM.run do
  @sockets = []
  WebSocket::EventMachine::Server.start(:host => "192.168.5.10", :port => 8080) do
    |ws|
    ws.onopen do
      @sockets << ws
      puts "Client connected"
    end

    ws.onmessage do |msg, type|
      puts "Received message: #{msg} #{type}"
      @sockets.each do |sk|
        sk.send msg, :type => type
      end
    end

    ws.onclose do
      puts "Client disconnected"
    end
  end

end
