function findMatching(drivers, query) {
    const lowerQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase().includes(lowerQuery))
    return matchingDrivers
}
function fuzzyMatch(drivers, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(lowerPrefix)
    );
    
    return matchingDrivers;
  }
  function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name ===name);
    return matchingDrivers
  }