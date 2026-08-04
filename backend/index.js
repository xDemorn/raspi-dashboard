//server.js
import express from "express";
import si from "systeminformation";
import path from "path";

const app = express();
const PORT = 3000;

const values = {
  'cpuCurrentSpeed': '*',
  'fullLoad': '*',
  'processess': '*',
  'mem': 'total, used, free',
  'os': '*',
  // 'diskLayout': 'device, type, name, size',
  'networkInterfaces': 'iface, ip4, mac, default',
  'versions': 'apache, gcc, git, nginx, node,npm, postgresql, python3'
}

// Serve static files
// app.use(express.static('public'));

// Configure Express to use EJS
// app.set("view engine", "ejs");

app.get("/system", async (req, res) => {
  const main = await si.get(values).catch(error => res.status(500).send(error));
  
  // only show the default network interface
  main.networkInterfaces = main.networkInterfaces.filter(iface => iface.default);

  // const diskInfo = await si.fsSize('/dev/nvme0n1').then(data => data.filter(disk => disk.mount === '/')).catch(error => res.status(500).send(error));
  // console.log(diskInfo);
  
  res.send(main);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});