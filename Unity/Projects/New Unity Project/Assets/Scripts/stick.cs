using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//막대기인데 마우스를 다운하면 자라나고 업하면 떨어진다.q
public class stick : MonoBehaviour
{
    //막대기의 상태
    public enum State
    {
        Grounded = 0,
        Growing,
        Falling,
        Landed
    }
    #region Properties (멤버 변수)
    public int m_ID;        //막대기 고유넘버
    private State m_State;
    private Transform m_Transform;
    public float m_FallSpeed = 10f; //떨어질때 속도
    public float m_GrowSpeed = 0.01f; //자랄때 속도
    public float m_Height = 0.01f; // 막대기의 높이
    #endregion

    #region Method (함수)
    // Start is called before the first frame update
    void Start()
    {
        m_State = State.Grounded;
        m_Transform = transform;
    }

    // Update is called once per frame
    void Update()
    {
        switch (m_State)
        {
            case State.Grounded:
                {
                    ProcessMouseInput();
                }
                break;

            case State.Growing:
                {
                    ProcessMouseInput();
                    Growup();
                }
                break;

            case State.Falling:
                break;
            case State.Landed:
                break;
            default:
                break;
        }

        
    }

    /// <summary>
    /// ㅁㅏ우스 입력처리
    /// </summary>
    private void ProcessMouseInput()
    {
        //마우스 왼쪽버튼을 다운하면 상태를 자라는 것으로 ㅕ변경
        if (Input.GetMouseButtonDown(0) == true)
        {
            m_State = State.Growing;
            Debug.Log("자라는중");
        }

        //마우스 왼쪽버튼을 업 하면 떨어짐.
        if (Input.GetMouseButtonUp(0) == true)
        {
            m_State = State.Falling;

            Debug.Log("떨어지는 중");
        }
    }
    /// <summary>
    /// 막대기를 y축으로 자라도록 한다
    /// </summary>
    private void Growup()
    {
        if (m_State != State.Growing) return;

        m_Height += m_GrowSpeed * Time.deltaTime;
        m_Transform.localScale = new Vector3(m_Transform.localScale.x, m_Height, m_Transform.localScale.z);
    }
    #endregion
}
