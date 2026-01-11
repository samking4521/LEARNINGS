//
//  LaunchViewController.swift
//  Blaze
//
//  Created by Abidoye Samuel on 21/10/2025.
//

import UIKit

class LaunchViewController: UIViewController {
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupViews()
    }
    
}

private extension LaunchViewController {
    func setupViews() {
        let requestCameraAuthorizationView = RequestCameraAuthorizationView()
        requestCameraAuthorizationView.translatesAutoresizingMaskIntoConstraints = false
        requestCameraAuthorizationView.delegate = self
        view.addSubview(requestCameraAuthorizationView)
        NSLayoutConstraint.activate([
            requestCameraAuthorizationView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            requestCameraAuthorizationView.topAnchor.constraint(equalTo: view.topAnchor),
            requestCameraAuthorizationView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            requestCameraAuthorizationView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}
    
    
    extension LaunchViewController: RequestCameraAuthorizationViewDelegate {
        func requestCameraAuthorizationTapped() {
            print("request camera authorization tapped")
        }
    }

