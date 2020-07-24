using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraCotroller : MonoBehaviour
{
    #region Properties
    public Transform m_PlayerTransform;
	private Transform m_Transform;
	#endregion
	#region Method
	// Start is called before the first frame update
	void Start()
    {
		m_Transform = transform;
    }

    // Update is called once per frame
    void Update()
    {
		FollowPlayer();
    }
    private void FollowPlayer()
	{
		m_Transform.position = new Vector3(m_PlayerTransform.position.x, m_PlayerTransform.position.y, m_Transform.position.z);

	}
	#endregion
}
