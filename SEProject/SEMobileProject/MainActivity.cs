using Android.App;
using Android.Widget;
using Android.OS;
using Android.Content;
using System.Collections.Generic;
using Android.Content.PM;
using Android.Provider;
using System;
using Android.Graphics;
using System.IO;

namespace SEMobileProject
{
    [Activity(Label = "SEMobileProject", MainLauncher = true)]
    public class MainActivity : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.StartMenu);

            Button Login = FindViewById<Button>(Resource.Id.StartMenuLoginButton);

            Login.Click += Login_Click;
            
        }
        
        private void Login_Click(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.MainMenu);
        }
       
    }

    
}

