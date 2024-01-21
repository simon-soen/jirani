// apiUtils.js

const fetchSupplierUsernames = async (supplierIds) => {
    try {
      const usernames = {};
  
      for (const supplierId of supplierIds) {
        const username = await fetchSupplierUsername({ supplier: supplierId });
        usernames[supplierId] = username;
      }
  
      return usernames;
    } catch (error) {
      console.error('Error fetching supplier usernames:', error);
      return {};
    }
  };
  
  const fetchSupplierUsername = async (item) => {
    try {
      if (!item || !item.supplier) {
        console.error('Supplier information is missing in the item object');
        return 'Unknown';
      }
  
      const response = await fetch(`/api/users/${item.supplier.replace(/"/g, '')}`);
      const userData = await response.json();
  
      if (response.ok) {
        console.log('Supplier username:', userData.username);
        return userData.username;
      } else {
        console.log('Server returned an error:', userData.error);
        return 'Unknown';
      }
    } catch (error) {
      console.error('Error fetching supplier details:', error);
      return 'Unknown';
    }
  };
  
  export { fetchSupplierUsernames };
  