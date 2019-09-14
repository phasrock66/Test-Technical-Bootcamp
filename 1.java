String nama, alamat;
        int age;
        String[] hobbies = {"Membaca", "Mendesain", "Mengedit", "Olahraga"};
        String[] list_school = new String[4];
        //mengisi nilai array dan Variable
        nama = "ANDHIKA ILHAM SAPUTRA";
        alamat ="Cilodong, Depok";
        age = 18;
        list_school[0]="SMK_YAJ ";
        list_school[1]="2016";
        list_school[2]="2019";
        list_school[3]=null;
        boolean married, interest_koding;
        
        //menampilkan 
        System.out.println("Name: "+nama);
        System.out.println("Age: "+age);
        System.out.println("Address: "+alamat);
        System.out.println("Hobbies: "+hobbies[1]+", " + hobbies[2]+ ", " + hobbies[3]);
        System.out.println("name: "+list_school[0] + "DEPOK");
        System.out.println("year_in: "+list_school[1] );
        System.out.println("year_out: "+list_school[2] );
        System.out.println("major: "+list_school[3] );